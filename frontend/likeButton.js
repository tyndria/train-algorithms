import { useState } from 'react';
import { HeartIcon, SpinnerIcon } from './icons';

import './styles.css';

const URL = 'https://www.greatfrontend.com/api/questions/like-button';

const classnames = (...classes) => classes.filter(c => Boolean(c)).join(' ');

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [liked, setLiked] = useState(false);
  
  const handleClick = async (action) => {
    const request = new Request(URL, 
      { 
        method: 'POST', 
        body: JSON.stringify({ action }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(request);
      if (!response.ok) {
        const result = await response.json();
        setError(result.message);
      } else {
        setLiked(action === 'like' ? true : false);
      }
    } finally {
      setLoading(false);
    }
  }

  const Icon = loading ? SpinnerIcon : HeartIcon;

  return (
    <div>
      <button
        className={classnames(
          "button", 
          liked ? "liked-button" : "default-button"
        )}
        disabled={loading}
        onClick={() => handleClick(liked ? 'unlike' : 'like')}
      >
        <Icon className={classnames("icon")} /> 
        <span className={classnames("text")}>{liked ? 'Liked' : 'Like'}</span>
      </button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
