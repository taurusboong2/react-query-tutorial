import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { SuperHeroPage } from './components/SuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import { DynamicParallelPage } from './components/DynamicParallel.page';
import { DependentQueriesPage } from './components/DependentQueries.page';
import { PaginatedQueriesPage } from './components/PaginatedQueries.page';
import { InfiniteQueriesPpage } from './components/InfiniteQueries.page';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-parallel">Parallel</Link>
              </li>
              <li>
                <Link to="/rq-dynamicparallel">Dynamic Parallel</Link>
              </li>
              <li>
                <Link to="/rq-dependent">dependent queries</Link>
              </li>
              <li>
                <Link to="/rq-colors">paginated Queries</Link>
              </li>
              <li>
                <Link to="/rq-infiniteColors">Infinite Queries</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/rq-super-heroes/:heroId" element={<SuperHeroPage />} />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
          <Route path="/rq-dynamicparallel" element={<DynamicParallelPage heroIds={[1, 5]} />} />
          <Route path="/rq-dependent" element={<DependentQueriesPage id="aaa" />} />
          <Route path="/rq-colors" element={<PaginatedQueriesPage />} />
          <Route path="/rq-infiniteColors" element={<InfiniteQueriesPpage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
