import { useEffect, useState } from "react";

export const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://api-colombia.com/api/v1/TouristicAttraction');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);


    return (
        <div>
            <h1>Artículos</h1>
            <div className="row mb-2">
                {articles.map(
                    (article) => (
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary-emphasis">{article.city.name}</strong>
                                    <h3 className="mb-0">{article.name}</h3>

                                    <p className="card-text mb-auto">{article.description}</p>
                                    <a href={article.images[0]} target="parent" className="icon-link gap-1 icon-link-hover stretched-link">
                                        Foto
                                        <svg className="bi"><use xlink:href="#chevron-right"></use></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
