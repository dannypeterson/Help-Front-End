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
      <label htmlFor="description">Description:</label>
      <textarea
        onChange={handleChange}
        value={formState.description}
      ></textarea>
      <label htmlFor="rating">Rating:</label>
      <input
        onChange={handleChange}
        type="number"
        id="title"
        value={formState.title}
      />
      <label htmlFor="image">Post Your Image</label>
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
