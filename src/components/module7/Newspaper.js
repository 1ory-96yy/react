import React from 'react';

function Newspaper({
  title = "Заголовок статті",
  author = "Ім'я автора",
  text = "Текст статті...",
  date = "2025-07-29",
  fontStyles = {},
  backgroundStyles = {},
  image = null,
  imagePosition = 'left', 
  titleAlign = 'center'
}) {
  const { fontFamily, fontSize, color } = fontStyles;

  const articleStyle = {
    fontFamily,
    fontSize,
    color,
    backgroundColor: backgroundStyles.article || 'white',
    padding: '1rem',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
    gap: '1rem',
    flexWrap: 'wrap',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const imageStyle = {
    maxWidth: '300px',
    backgroundColor: backgroundStyles.image || 'transparent',
    objectFit: 'cover',
  };

  const titleStyle = {
    backgroundColor: backgroundStyles.title || 'transparent',
    textAlign: titleAlign,
    width: '100%',
  };

  const contentStyle = {
    flex: 1,
    minWidth: '250px',
  };

  return (
    <div style={articleStyle}>
      {image && <img src={image} alt="Article" style={imageStyle} />}
      <div style={contentStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <p><strong>Автор:</strong> {author}</p>
        <p>{text}</p>
        <p><em>Дата: {date}</em></p>
      </div>
    </div>
  );
}

export default Newspaper;
