import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import PhotoComments from './PhotoComments';
import { userContext } from '../../userContext';
import PhotoContentDelete from './PhotoContentDelete';
import PhotoContentCurtida from './PhotoContentCurtida';

const PhotoContent = ({ data, setModalPhoto }) => {
  const {
    pathFotoPost,
    comentarios,
    descricaoPost,
    usuario,
    curtidas,
    criadoEm,
    _id,
  } = data;
  const { dataUser } = React.useContext(userContext);
  const [comentario, setComentario] = React.useState(comentarios);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={pathFotoPost} alt={descricaoPost} />
      </div>
      <div className={styles.details}>
        <div className={styles.detailsContent}>
          {dataUser !== null && dataUser.usuario === usuario ? (
            <p className={styles.authorDelete}>
              <PhotoContentDelete _id={_id} setModalPhoto={setModalPhoto} />
              <PhotoContentCurtida
                curtidas={curtidas}
                usuario={dataUser.usuario}
                _id={_id}
              />
            </p>
          ) : (
            <p className={styles.author}>
              <Link to={`/perfil/${usuario}`}>@{usuario}</Link>
              <PhotoContentCurtida
                curtidas={curtidas}
                _id={_id}
                usuario={dataUser !== null && dataUser.usuario}
              />
            </p>
          )}
          <p className={styles.descricaoPost}>{descricaoPost}</p>
        </div>
        <PhotoComments
          id={_id}
          comments={comentario}
          setModalPhoto={setModalPhoto}
        />
      </div>
    </div>
  );
};

export default PhotoContent;
