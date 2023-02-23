import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';
import defaultImg from '../../assets/imagen.jpg';

const Card = ({ id, name, image, genres, rating }) => {
	return (
		<div id={id} key={id} className={style.all}>
			<div className={style.html}>
				<div className={style.body}>
					<figure className={style.imageBlock}>
						<img src={image ? image : defaultImg} alt={name} />
						<figcaption>
							<h3>
								<b>
									<i>{name}</i>
								</b>
							</h3>
							<h4>
								<i>{rating} &#9733;</i>
							</h4>
							<h4>
								{genres && (
									<i>
										<p>{genres.map((g) => Object.values(g)).join(' ,  ')}</p>
									</i>
								)}
							</h4>
							<Link to={`/detail/${id}`} className={style.linkbutton}>
								<button>
									<i>Details</i>
								</button>
							</Link>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default Card;