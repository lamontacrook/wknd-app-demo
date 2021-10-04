const DetailHeader = () => {

}
<div style={styles.headerContainer}>
  <IoChevronBack onClick={() => window.history.back()} size="2rem" />
  {!title && <div className="loading-skeleton" style={styles.titleSkeleton}></div>}
  {title && <h1 style={styles.title}>{title}</h1>}
</div>