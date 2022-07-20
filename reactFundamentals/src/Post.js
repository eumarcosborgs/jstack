import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ post, onRemove, likes }) {
  const { id, title, subtitle } = post;
  return (
    <>
      <article>
        <strong>{title}</strong>
        <button onClick={() => onRemove(id)}>Remove post</button>
        <small>{subtitle}</small>

        <br />

        Media: {likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}