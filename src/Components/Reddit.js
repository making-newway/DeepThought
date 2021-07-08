import React, { useEffect, useState } from 'react';

function Reddit() {

    const [data, setData] = useState({});
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('trending');

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async() => {
		await fetch(`https://www.reddit.com/r/${search}/new.json?sort=new`)
                    .then((response) => response.json())
                    .then((datas) => {
                        setData(datas);
                        setItems(datas.data.children);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
	}

    const handleClick = (e) => {
		if(e.key == 'Enter' || e.target.value==='Go'){
			getApi();
		}
	}
	
    const handleChange = (e) => {
		setSearch(e.target.value);
	}
	
    const handleSubmit = (e) => {
		e.preventDefault();
	}


    return (
        <main className="reddit">
            <section className="search reddit-search">
                <h1>/r/</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" defaultValue={search} onChange={handleChange} onKeyPress={handleClick}/>
                </form>
            </section>


            <section className="list reddit-list">
                {
                    items && items.map(item => (
                        <div className="item reddit-item" key={item.data.id}>
                            <p><a href={`https://www.reddit.com/${item.data.subreddit_name_prefixed}`} target="_blank" rel="noreferrer">{item.data.subreddit_name_prefixed}</a></p>
                            <p><a href={`https://www.reddit.com/u/${item.data.author}`} target="_blank" rel="noreferrer">u/{item.data.author}</a></p>
                            {
                                item.data.thumbnail &&
                                <a href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noreferrer"><img src={item.data.thumbnail} alt="" /></a>
                            }

                            {
                                item.data.url === '' &&
                                <a href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noreferrer"><img src={item.data.url} alt="" /></a>
                            }

                            <h3><a href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noreferrer">{item.data.title}</a></h3>

                            <p>Comments {item.data.num_comments}</p>
                        </div>
                    ))
                }
            </section>

        </main>
    )
}

export default Reddit;