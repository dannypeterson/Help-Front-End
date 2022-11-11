const CreateReview = () => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="dish">Dish:</label>
      <input
          onChange={handleChange}
          type="text"
          id="dish"
          value={formState.dishName}
        />
        <label htmlFor="title">Title:</label>
        <input
          className="form-text"
          onChange={handleChange}
          type="text"
          id="title"
          value={formState.title}
        />
        <label htmlFor="description">Description:</label>
        <textarea

          onChange={handleChange}
          value={formState.message}
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="image">Post Image (url):</label>
        <input
          onChange={handleChange}
          type="text"
          id="image"
          value={formState.image}
        />
        <button type="submit">Post My Review!</button>
      </form>
    )
}

export default CreateReview