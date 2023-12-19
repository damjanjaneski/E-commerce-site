import styles from "./styles/Pagination.module.css";

export default function Pagination({ pages, activePage, onPageChange }) {
  const length = pages;
  const numOfPages = Array.from({ length }, (_, index) => index + 1);

  console.log(numOfPages);

  return (
    <div className={styles.container}>
      <svg
        onClick={
          activePage !== 1
            ? () => {
                onPageChange(activePage - 1);
              }
            : undefined
        }
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="14"
        viewBox="0 0 448 512"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
      <div style={{ display: "flex" }}>
        <div>
          {numOfPages.map((page, x) => {
            return (
              <button
                style={{ marginRight: "25px" }}
                className={activePage === x + 1 ? styles.activePage : ""}
                onClick={() => onPageChange(1)}
              >
                {x + 1}
              </button>
            );
          })}
        </div>
      </div>
      <svg
        onClick={
          activePage !== 6
            ? () => {
                onPageChange(activePage + 1);
              }
            : undefined
        }
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="14"
        viewBox="0 0 448 512"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg>
    </div>
  );
}
