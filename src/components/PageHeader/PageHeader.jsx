import style from './PageHeader.module.css';

function PageHeader({ children, task }) {
  return (
    <div>
      <h1 className={style.pageHeader}>{children}</h1>
      <h2 className={style.taskName}>{task}</h2>
    </div>
  );
}

export default PageHeader;
