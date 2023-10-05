import React, { useEffect, useState } from "react";

const SubCategory = ({ category, setShowModal, categoryId, catgeoryName }) => {
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/subcategories/subcategories/category/${categoryId}`
        );
        const result = await response.json();
        setSubCategories(result);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubcategories();
  }, [category._id]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="modal fade"
      id="subcategories"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {catgeoryName}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              {Array.isArray(subcategories) && subcategories.length === 0 ? (
                <p>No subcategories found for {catgeoryName}</p>
              ) : (
                Array.isArray(subcategories) &&
                subcategories?.map((subcategory) => (
                  <div className="col-md-4" key={subcategory?._id}>
                    <div className="media-bg-animate mba-bdr-15">
                      <div className="aon-categories-area2-iconbox aon-icon-effect sub-categories">
                        <div className="aon-cate-area2-icon">
                          <span>
                            <i className="aon-icon">
                              <img
                                src={subcategory?.image}
                                alt={subcategory?.title}
                              />
                            </i>
                          </span>
                        </div>
                        <div className="aon-cate-area2-content">
                          <a href={`/service-list/${subcategory?._id}`}>
                            <p className="aon-tilte text-center">
                              {subcategory?.title}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
