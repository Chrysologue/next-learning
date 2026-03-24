import { posts } from "@/data/posts"
export default async function Post({params}: {params: Promise<{slug: string}>}){

    const {slug} = await params
    const post = posts.find(p => p.slug === slug)
    if(!post) return <p>No matching Post found</p>
    return(
        <div className="w-[400px] mx-auto p-5">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.content}</p>
        </div>
    )
}