import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import PhotoComments from './PhotoComments';

const PhotoContent = ({ data }) => {
  console.log(data);
  const {
    pathFotoPost,
    comentarios,
    descricaoPost,
    usuario,
    curtidas,
    criadoEm,
    _id,
  } = data;

  const dataFormatada = format(parseISO(criadoEm), 'dd/MM/yyyy');

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={pathFotoPost} alt={descricaoPost} />
      </div>
      <div className={styles.details}>
        <div className={styles.detailsContent}>
          <p className={styles.author}>
            <Link to={`/perfil/${usuario}`}>@{usuario}</Link>
            <span className={styles.curtidas}>{curtidas.length}</span>
          </p>
          <p className={styles.descricaoPost}>{descricaoPost}</p>
        </div>
        <PhotoComments id={_id} comments={comentarios} />
      </div>
    </div>
  );
};

export default PhotoContent;
