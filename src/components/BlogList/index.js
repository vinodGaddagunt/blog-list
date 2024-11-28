// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogDetails} = props

  return (
    <ul className="list-container">
      {blogDetails.map(each => (
        <BlogItem key={each.id} itemDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
