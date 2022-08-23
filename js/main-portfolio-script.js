'use strict'

import {workItems} from './work-items.js';


const projectContainer = document.querySelector('.project');
const projectMarkup = createPortfolio(workItems);

// console.log(projectMarkup)

projectContainer.insertAdjacentHTML('beforeend', projectMarkup);

function createPortfolio(projects) {
    return projects.map(({link, srcset, sizes, src, alt, width, overlayDesc, projectTitle, projectText,}) => {
        return `
        <li class="project__item">
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
}
