function MinText({ style, h, text }) {
  return (
    <>
      <div style={style} className="portfolio_short_block_text_item">
        <div className="portfolio_short_block_text_item_header">
          <span>{h}</span>
        </div>
        <div className="portfolio_short_block_text_item_text">
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}

export default MinText;
