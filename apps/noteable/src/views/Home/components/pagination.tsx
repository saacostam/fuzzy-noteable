import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface Page {
  pageNumber: number;
  link: string;
}

export interface PaginationProps {
  pages: Page[];
  className?: string;
  currentPage: number;
}

export function Pagination({ pages, className, currentPage }: PaginationProps) {
  return (
    <div className={twMerge('join', className)}>
      {pages.map(({ pageNumber, link }) => (
        <Link
          to={link}
          className={twMerge(
            'join-item btn',
            pageNumber === currentPage ? 'btn-secondary' : ''
          )}
        >
          {pageNumber}
        </Link>
      ))}
    </div>
  );
}
