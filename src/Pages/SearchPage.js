import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import {Link} from 'react-router-dom'
import Response from './response'
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);
    //const data = Response;
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
               <Link to='/'>
                   <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
                       alt="logo"
                       className="searchPage_logo" 
                   />
               </Link>
               <div className="searchPage_headerBody">
                 <Search hiddenButtons />
                 <div className="searchPage_options">
                    <div className="searchPage_optionLeft">
                       <div className="searchPage_option">
                          <SearchIcon />
                          <Link to="#">All</Link>
                       </div>
                       <div className="searchPage_option">
                          <DescriptionIcon />
                          <Link to="#">News</Link>
                       </div>
                       <div className="searchPage_option">
                          <ImageIcon />
                          <Link to="#">Images</Link>
                       </div>
                       <div className="searchPage_option">
                          <LocalOfferIcon />
                          <Link to="#">Shopping</Link>
                       </div>
                       <div className="searchPage_option">
                          <RoomIcon />
                          <Link to="#">Maps</Link>
                       </div>
                       <div className="searchPage_option">
                          <MoreVertIcon />
                          <Link to="#">more</Link>
                       </div>
                    </div>
                    <div className="searchPage_optionRight">
                        <div className="searchPage_option">
                            <Link to='#'>Settings</Link>
                        </div>
                        <div className="searchPage_option">
                            <Link to='#'>Tools</Link>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            {term && (
                <div className="searchPage_results">
                   <p className="searchPage_resultCount">
                       About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                   </p>

                   {data?.items.map(item => (
                       <div className="searchPage_result">
                           <a href={item.link}>
                             {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                 <img 
                                    className="searchPage_resultImage"
                                    src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                    alt=""
                                 />
                             )}
                             {item.displayLink}
                           </a>
                           <a className="searchPage_resultTitle" href={item.link}>
                               <h2>{item.title}</h2>
                           </a>
                           <p className="searchPage_resultSnippet">{item.snippet}</p>
                       </div>
                   ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
