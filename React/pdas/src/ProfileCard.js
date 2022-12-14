function ProfileCard({ title, handle, image, description }) {
    // This is the multiple line version of the destructuring below
    // const title = props.title;
    // const handle = props.handle;

    // Destructuring
    // const { title, handle } = props;

    // We then added it as a object argument in the function
    // this does the same has the destructuring above 

    return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
    )
}

export default ProfileCard