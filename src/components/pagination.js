import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { totalMovies, pages, onPageChange, currentPage } = props;
  const numOfPages = Math.ceil(totalMovies / pages);
  const pageArr = _.range(1, numOfPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageArr.length > 1
          ? pageArr.map(page => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))
          : null}

        {/* <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li> */}

        {/* <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
