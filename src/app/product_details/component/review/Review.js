'use client'
import styles from "./review.module.css";

const Review = () => {
  const starRatings = [
    { stars: '★ ★ ★ ★ ★', percentage: 100},
    { stars: '★ ★ ★ ★ ☆', percentage: 80},
    { stars: '★ ★ ★ ☆ ☆', percentage: 75},
    { stars: '★ ★ ☆ ☆ ☆', percentage: 50,},
    { stars: '★ ☆ ☆ ☆ ☆', percentage: 25,},
  ];

  const overallReviews = 4.0; 

  return (
    <>
      <div className="rating-container">
        <div className={styles.stars}>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={styles.star}>
              {index < Math.floor(overallReviews) ? "★" : "☆"}
            </span>
          ))}
          <span className="font-normal text-[#666] text-sm ml-3">
            ({overallReviews} out of 5 )
          </span>
        </div>

        <div className={styles.progress_box}>
          {starRatings.map((rating) => (
            <div key={rating.stars} className={styles.overallrating}>
              <span className="text-yellow-500 text-[16px]">{rating.stars} </span>
              <div className={styles.progress} style={{ height: "15px" }}>
                <div
                  className={`bg-yellow-500 rounded`} style={{ width: `${rating.percentage}%`, height: "15px" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
