const videos = document.querySelectorAll('.videos')
const posters = document.querySelectorAll('.poster-meta')
const play_button = document.querySelectorAll('.fa-play-circle-o')
const caption_head = document.querySelectorAll('#caption-head')
const caption_text = document.querySelectorAll('#caption-text')
const video_1 = document.querySelector('.col-md-6')
const video_2 = document.querySelector('.col-md-4')
const video_4 = document.querySelector('#video_4')
const inners = document.querySelectorAll('.inner')
const s_inners = document.querySelectorAll('.s_inner')
const categhead = document.querySelector('.categhead')
const categories = document.querySelector('.categories')
const kyc = document.querySelector('.kyc')
const kyc_images = document.querySelectorAll('.kyc_image')
const register_btn = document.querySelector('.register-button')
const blocks = document.querySelectorAll('.blocks')
const redpart = document.querySelector('.redpart')
const customer_review = document.querySelector('.customer-review')
const app_download = document.querySelector('.app_download')
var models = document.querySelectorAll('.modal')
var close = document.querySelector('.close')
var current_playing = 0


posters.forEach((poster, idx) => {
  poster.addEventListener('mouseleave', function (event) {
    if (play_button[idx]) {
      play_button[idx].style.display = 'none'
      caption_head[idx].style.display = 'none'
      caption_text[idx].style.display = 'none'
    }
  })

  poster.addEventListener('mouseenter', function (event) {
    if (play_button[idx]) {
      play_button[idx].style.display = 'inline'
      caption_head[idx].style.display = 'inline'
      caption_text[idx].style.display = 'inline'
      videos[idx].style.cursor = 'pointer'
      videos[idx].style.opacity = 0.93
    }
  })

})


document.addEventListener('keydown', logKey);

function logKey(e) {
  if (e.key === 'Escape') {
    models.forEach((model, model_idx) => {
      model.style.display = 'none'
      if (current_playing != -1) {
        console.log(current_playing)

        videos[current_playing].pause()
        current_playing = -1
      }
    })
  }
}

play_button.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    models[i].style.display = 'block'
    current_playing = i
  })
})

close.addEventListener('click', () => {
  models.forEach((model, model_idx) => {
    model.style.display = 'none'
    if (current_playing != -1) {
      videos[current_playing].pause()
      current_playing = -1
    }
  }
  )
})

$(window).scroll(function () {
  height = $(window).scrollTop() + $(window).height() - $(document).height()
  topscreen = $(window).scrollTop()
  if (topscreen > 250) {
    categories.style.opacity = 1

    inners.forEach((inner, idx) => {
      inner.classList.add('come-in')
      inner.style.opacity = 1
    })
    s_inners.forEach((s_inner, idx) => {
      s_inner.classList.add('come-in')
      s_inner.style.opacity = 1
    })
    categhead.classList.add('come-in')

  }
  if (topscreen > 1200) {
    kyc.style.opacity = 1
    kyc.classList.add('come-in')
    kyc_images.forEach((kyc_image, idx) => {
      kyc_image.classList.add('come-in')
    })
    register_btn.classList.add('come-in')

  }
  if (topscreen > 2000) {
    blocks.forEach((block, idx) => {
      block.style.opacity = 1
      block.classList.add('come-in')
    })
  }
  if (topscreen > 2550) {
    redpart.style.opacity = 1;
    redpart.classList.add('come-left')
  }

  if (topscreen > 4700) {
    customer_review.style.opacity = 1
    video_2.classList.add('come-in')
    video_1.classList.add('come-left')
    video_4.classList.add('come-in')
  }
  if (topscreen > 5250) {
    app_download.style.opacity = 1
    app_download.classList.add('come-in')

  }
});
