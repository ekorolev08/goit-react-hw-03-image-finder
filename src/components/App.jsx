import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper } from './App.styled';
// import axios from "axios";
import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Modal } from 'components/modal/Modal';

const API_KEY = '39770884-54ae51e65da93280e548e1d6e';
const URL = `https://pixabay.com/api/`;
const PerPage = 12;

export function fetchGalleryImg(searchQuery, page) {
  return fetch(
    `${URL}?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export class App extends Component {
  state = {
    searchQuery: '',
    isShowModal: false,
    modalImage: '',
  };
   


  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  showModal = largeImageURL => {
    this.setState({ isShowModal: true, modalImage: largeImageURL });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  
  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          showModal={this.showModal}
          searchQuery={this.state.searchQuery}
        />
        {this.state.isShowModal && (
          <Modal
            closeModal={this.closeModal}
            modalImage={this.state.modalImage}
          />
        )}
        <ToastContainer autoClose={3000} theme="colored" />
      </Wrapper>
    );
  }
}

