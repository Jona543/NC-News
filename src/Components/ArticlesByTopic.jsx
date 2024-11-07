import { useState, useEffect } from "react"
import { getArticles } from "../api"
import ArticleCard from "./ArticleCard"
import { useParams } from "react-router-dom"

const ArticlesByTopic = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {topic} = useParams()

    useEffect(() => {
        getArticles(topic).then((articles) => {
            setArticles(articles)
        })
    }, [topic])

    return (
        <>
        <h1>Articles about {topic}</h1>
        <ul className="flex-container">
            {articles.map((article, index) => {
                return <ArticleCard key={index} article={article} />
            })}
        </ul>
        </>
    )

    



}

export default ArticlesByTopic