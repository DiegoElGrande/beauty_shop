import './blog.scss'
import BlogCard from './blogCard'
export default function Blog() {
    return (
        <div className="blog container">
            <div className="title">
                <h2>on the blog</h2>
                <a href="#">See All</a>
            </div>
            <div className="blog_card">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <img src="/image/icons/slider_indicator.svg" alt="circle" />
        </div>
    )
}