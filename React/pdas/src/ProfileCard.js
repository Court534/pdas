function ProfileCard({ title, handle }) {
    // This is the multiple line version of the destructuring below
    // const title = props.title;
    // const handle = props.handle;

    // Destructuring
    // const { title, handle } = props;

    // We then added it as a object argument in the function
    // this does the same has the destructuring above 

    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard