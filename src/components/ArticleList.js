import Article from "./Article"

function ArticleList ({posts}){
    let post = posts.map(post => {
        return <Article key={post.id} title={post.title} preview={post.preview} date={post.date} minutes={post.minutes}/>
    })
    return (
        <main>
            {post}
        </main>
    )
}

export default ArticleList