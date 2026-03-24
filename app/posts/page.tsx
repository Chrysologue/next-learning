import { posts } from "@/data/posts";
import Link from "next/link";

export default function Posts(){

    return(
        <section className="p-10 bg-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 text-center md:text-left">
                {posts.map(post => <Link key={post.slug} className="p-4 shadow-lg" href={`/posts/${post.slug}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </Link>)}
            </div>
        </section>
    )

}