import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNembers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNembers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNembers.map((elem, id) => {
          return (
            <li key={id}>
               <a
                href="!#"
                onClick={() => paginate(elem)}
                className="border-2 px-2 py-2"
              >
                {elem}
              </a> 
    
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
