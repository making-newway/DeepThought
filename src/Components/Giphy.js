import React, { useEffect, useState } from 'react';

function Giphy() {

    const [gifs, setGifs] = useState([]);
    const [prevs, setPrevs] = useState([]);
    const [search, setSearch] = useState('trending');

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        await fetch(`https://api.giphy.com/v1/gifs/search?api_key=xH0IKpwLphvBNzWvNyHYOcxR29KVxPrU&q=${search}&limit=25&offset=0&rating=G&lang=en`)
                    .then(response => response.json())
                    .then(data => {
                        if(prevs.indexOf(search) < 0) {
                            setGifs(data.data);
                            setPrevs([search, ...prevs]);
                        } else {
                            setGifs(data.data);
                        }
                    })
    }

    const handleClick = (e) => {
        if(typeof e === 'string') {
			setSearch(e);
			return;
		}
		
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
        <main className="giphy">
            <section className="search giphy-search">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={handleChange} onKeyPress={handleClick} />
                </form>
            </section>

            <section>
                <section className="giphy-history">
                    <h3>Search History</h3>
                    <ul>
                        {
                            prevs.map((item,ind) => (
                                <li key={`${ind}${item}`} onClick={() => this.handleClick(item)} value={item}>#{item}</li>
                            ))
                        }
                    </ul>
                </section>

                <section className="list giphy-list">
                    {
                        gifs && gifs.map(item => (
                        <div key={item.id} className="itrm giphy-item">
                            <h2><a href={item.bitly_url} target="_blank" rel="noreferrer">{item.title}</a></h2>
                            <a href={item.bitly_url} target="_blank" rel="noreferrer"><img src={item.images.preview_gif.url} alt="" /></a>


                            <p>
                                <a href={item.bitly_url} target="_blank" rel="noreferrer"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                <a href={item.bitly_url} rel="noopener"><i className="fa fa-download" aria-hidden="true"></i></a>
                                <a href={item.bitly_url} rel="noopener"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </p>
                        </div>
                        ))
                    }
				  </section>
            </section>
        </main>
    )
}

export default Giphy;