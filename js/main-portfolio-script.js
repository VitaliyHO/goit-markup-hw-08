'use strict'

import {workItems} from './work-items.js';

const projectsFilter = document.querySelector('.filter')
const projectContainer = document.querySelector('.project');
const projectMarkup = createPortfolio(workItems);


// console.log(projectsFilter)


projectContainer.insertAdjacentHTML('beforeend', projectMarkup);

function createPortfolio(projects) {
    return projects.map(({data, link, srcset, sizes, src, alt, width, overlayDesc, projectTitle, projectText,}) => {
        return `
        <li class="project__item" data-filter="${data}">
            <a class="project__link link" href="${link}">
              <div class="image-container">
                <img class="projects-image" srcset="${srcset}"
                  sizes="${sizes}"
                  src="${src}" alt="${alt}" width="${width}"
                  loading="lazy" />
                <div class="overlay">
                  <p class="overlay__text">
                    ${overlayDesc}
                  </p>
                </div>
              </div>
              <div class="project__description">
                <h2 class="project__title">${projectTitle}</h2>
                <p class="project__text">${projectText}</p>
              </div>
            </a>
            </li>`
        }).join('');
    };

    
    
    projectsFilter.addEventListener('click', onFilterButtonClick)
    
    function onFilterButtonClick(event) {
      const filterCategory = event.target.dataset.filter;
      
      const allProjects = document.querySelectorAll('.project__item');    

      console.log(event.target.dataset.filter);
      

    allProjects.forEach(element => {
      element.style.display = "block"

      // if(element.dataset.filter === 'all') {
      //   element.style.display = "block";
      //      };
      
      if(event.target.dataset.filter !== 'all' && element.dataset.filter !== filterCategory){
        element.style.display = "none";
      } });
    }
