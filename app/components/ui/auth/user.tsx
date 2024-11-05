'use client';

import { UserProfile } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import styles from './user.module.css';
import { useCallback, useState } from 'react';
import Link from 'next/link';

export default function UserManagement({ user }: { user: UserProfile }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  return (
    <div className={styles.user_profile}>
      <div onClick={toggleMenu}>
        <Image
          src={
            user.picture ??
            'data:image/png;base64,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'
          }
          alt={user.name ?? 'Foto de perfil del usuario'}
          width={48}
          height={48}
        />
      </div>

      <div
        className={styles.desplegable}
        style={{ display: open ? 'block' : 'none' }}
      >
        <ul>
          <li>
            <Link href={'/profile'}>Mi Perfil</Link>
            <hr />
          </li>
          <li>
            <Link href={'/offers'}>Mis Promociones</Link>
            <hr />
          </li>
          <li>
            <Link href={'/orders'}>Mis Pedidos</Link>
            <hr />
          </li>
          <li>
            <Link href={'/support'}>Soporte</Link>
            <hr />
          </li>
          <li>
            <Link href={'/api/auth/logout'}>Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
