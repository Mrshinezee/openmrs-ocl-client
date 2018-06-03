import React from 'react';
import Tooltip from 'react-tooltip';

/* eslint-disable */
const SearchBar = ({ onSearch, onSubmit, searchValue, dict, ext, IR, IT, sort }) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-1" />
      <div className="col-sm-12 col-md-10  mt-2 col-12">
        <form className="search-bar-wrapper" onSubmit={onSubmit}>
          <i className="fas fa-search fa-fw mr-1 col-1" />
          <input
            type="search"
            name="searchInput"
            id="search"
            value={searchValue}
            onChange={onSearch}
            className="search-bar col-5 col-sm-7 col-md-6 col-lg-7"
            placeholder="Search for sources"
          />
          <div className="dropdown d-inline d-md-none col-1 mini-source-btn">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="sources"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-tip="sources"
            >
              <i className="fas fa-list fa-fw" />
            </a>

            <div className="dropdown-menu" aria-labelledby="sources">
              <a className="dropdown-item" href="#">
                Sources
              </a>
            </div>
          </div>
          <div className="dropdown d-inline d-md-none mini-sort-btn col-1">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="sort"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-tip="sort"
            >
              <i className="fas fa-sort-alpha-up fa-fw" />
            </a>

            <div className="dropdown-menu" aria-labelledby="sort">
              <a
                className="dropdown-item"
                id="sortAsc"
                href="#"
                onClick={event => sort(event, 'sortAsc=name')}
              >
                <i className="fas fa-sort-alpha-up fa-fw" />
                Name (Asc)
              </a>
              <a
                className="dropdown-item"
                href="#"
                id="sortDesc"
                onClick={event => sort(event, 'sortDesc=name')}
              >
                <i className="fas fa-sort-alpha-down fa-fw" />
                Name (Desc)
              </a>
            </div>
          </div>
          <div className="dropdown d-none d-md-inline d-lg-inline d-xl-inline mini-sort-btn col-md-2">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="sourceType"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-filter fa-fw" />
              Source Type
            </a>

            <div className="dropdown-menu source-menu" aria-labelledby="sourceType">
              <div className="form-check ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="dict"
                  id="dictionary"
                  onChange={onSearch}
                />
                <label className="form-check-label" htmlFor="dictionary">
                  Dictionary
                </label>
              </div>
              <div className="form-check ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="ext"
                  onChange={onSearch}
                  id="external"
                />
                <label className="form-check-label" htmlFor="external">
                  External
                </label>
              </div>
              <div className="form-check ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="indicator"
                  name="IR"
                  onChange={onSearch}
                />
                <label className="form-check-label" htmlFor="indicator">
                  Indicator Registry
                </label>
              </div>
              <div className="form-check ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="interface"
                  name="IT"
                  onChange={onSearch}
                />
                <label className="form-check-label" htmlFor="interface">
                  Interface Terminology
                </label>
              </div>
              <div className="form-check p-1">
                <a
                  href="#!"
                  className="btn btn-sm btn-block btn-secondary text-white"
                  onClick={onSubmit}
                >
                  filter result
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown d-none d-md-inline d-lg-inline d-xl-inline mini-sort-btn col-md-2">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="sort"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-sort fa-fw" />
              Sort
            </a>

            <div className="dropdown-menu" aria-labelledby="sort">
              <a
                className="dropdown-item"
                id="sort-asc"
                href="#"
                onClick={event => sort(event, 'sortAsc=name')}
              >
                <i className="fas fa-sort-alpha-up fa-fw" />
                Name (Asc)
              </a>
              <a
                className="dropdown-item"
                id="sort-desc"
                href="#"
                onClick={event => sort(event, 'sortDesc=name')}
              >
                <i className="fas fa-sort-alpha-down fa-fw" />
                Name (Desc)
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Tooltip place="bottom" type="dark" effect="float" />
  </div>
);

export default SearchBar;