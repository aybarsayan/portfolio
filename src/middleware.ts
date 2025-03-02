import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // /eng route'una gelen istekleri ana sayfaya yönlendir
  // URL parametresi olarak dil bilgisini ekle
  if (request.nextUrl.pathname === '/eng') {
    return NextResponse.rewrite(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/eng'],
}; 