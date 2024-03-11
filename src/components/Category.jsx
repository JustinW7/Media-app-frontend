import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { addToCategory, getAllCategory, deleteCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [allCategory, setAllCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allvideo: [],
      };
      try {
        // make API call to add a new category
        const response = await addToCategory(body);

        if (response.status >= 200 && response.status < 300) {
          // hide modal
          handleClose();

          // refresh categories
          getCategory();

          toast.success('Category added successfully');
        } else {
          toast.error('Something went wrong');
        }
      } catch (error) {
        console.error('Error adding category:', error);
        toast.error('Something went wrong');
      }
    } else {
      toast.warning('Please enter a category name');
    }
  };

  const getCategory = async () => {
    try {
      // make API call to get all categories
      const { data } = await getAllCategory();
      setAllCategory(data);
    } catch (error) {
      console.error('Error getting categories:', error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleDelete = async (id) => {
    try {
      // make API call to delete the category by its id
      await deleteCategory(id);

      // refresh the list of categories
      getCategory();

      toast.success('Category deleted successfully');
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <div className="d-grid ms-3">
        <button className="btn btn-info" onClick={handleShow}>
          Add to Category
        </button>
      </div>
      {allCategory.length ? (
        allCategory.map((item) => (
          <div key={item?.id} className="mt-5 mb-3 border rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item?.categoryName}</h6>
              <button className="btn" onClick={() => handleDelete(item?.id)}>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="fw-bolder text-danger fs-5">Nothing to Display</p>
      )}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter Video Name</Form.Label>
              <Form.Control
                placeholder="Enter Video Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Category;
