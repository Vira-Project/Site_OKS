function HeaderBtn({ icon, text }) {
  return (
    <>
      <div className="header_btn btn">
        {icon}
        <span>{text}</span>
      </div>
    </>
  );
}

export default HeaderBtn;
