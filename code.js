<script>
function store(){var s=0,n=setInterval(function(){s++,$("ul.choose-a-store-locations__item-list").children().length&&$("li.choose-a-store-locations__item").each(function(){var s=$(this).find(".choose-a-store-locations__item-title_name").text().trim(),o=new Set(["Ft McMurray 2"]),e=$('<ul class="working-hours__list TnL-newhours"><h4><b>CURBSIDE PICK UP HOURS </b></h4><li class="working-hours__item"><span class="working-hours__schedule">Sunday</span><span class="working-hours__schedule">10:00</span><span class="working-hours__schedule">AM</span><span class="working-hours__schedule">-</span><span class="working-hours__schedule">7:00</span><span class="working-hours__schedule">PM</span></li><li class="working-hours__item"><span class="working-hours__schedule">Monday</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">AM</span><span class="working-hours__schedule">-</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">PM</span></li><li class="working-hours__item"><span class="working-hours__schedule">Tuesday</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">AM</span><span class="working-hours__schedule">-</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">PM</span></li><li class="working-hours__item"><span class="working-hours__schedule">Wednesday</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">AM</span><span class="working-hours__schedule">-</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">PM</span></li><li class="working-hours__item"><span class="working-hours__schedule">Thursday</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">AM</span><span class="working-hours__schedule">-</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">PM</span></li><li class="working-hours__item"><span class="working-hours__schedule">Friday</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">AM</span><span class="working-hours__schedule">-</span><span class="working-hours__schedule">8:00</span><span class="working-hours__schedule">PM</span></li><li class="working-hours__item"><span class="working-hours__schedule">Saturday</span><span class="working-hours__schedule">9:00</span><span class="working-hours__schedule">AM</span><span class="working-hours__schedule">-</span><span class="working-hours__schedule">7:00</span><span class="working-hours__schedule">PM</span></li></ul>'),a=$(this).find("section.choose-a-store-locations__item-expanded .working-hours__notice"),c=$(this).find(".TnL-newhours").length;new Set(["Ste Foy","Mascouche"]);o.has(s)&&c<1&&e.insertBefore(a),clearInterval(n)}),s>8&&clearInterval(n)},1e3)}$(document).on("click","a#ship-to-home__description-link,button.choose-a-store-search__button,a#choose-a-store__button",function(){store()}),$(document).on("keyup","input.input.choose-a-store-search__input,a#choose-a-store__button",function(s){13===s.keyCode&&(s.preventDefault(),store())}),$(document).on("click","a#ship-to-home__description-link,.pickUpInStoreSection.prd-pick-up-in-store-section button#ship-to-home__add-to-cart-button",function(){setTimeout(function(){0==$(".choose-a-store-search__content .modal__title").hasClass("curbside-new")&&$(".modal__title").addClass("curbside-new")},500)}),$(document).on("click",".choose-a-store",function(){1==$("choose-a-store-search__content .modal__title").hasClass("curbside-new")&&$(".modal__title").removeClass("curbside-new")}),$(document).on("click","button.choose-a-store-locations__item-select-button",function(){setTimeout(function(){$(".modal-transit-product__content-title p b:nth-child(2)").text("free curbside pick-up")},300)}),$(document).on("click",".pickUpInStoreSection.prd-pick-up-in-store-section button#ship-to-home__add-to-cart-button",function(){setTimeout(function(){$(".modal-transit-product__content-title p b:first-child").text("free curbside pick-up")},800)});
</script>
<style>
.choose-a-store-search h2.modal__title.curbside-new:before{content:"CURBSIDE PICK UP";visibility:visible}.choose-a-store-search h2.modal__title.curbside-new{visibility:hidden}.product-detail-form__actions .pickUpInStoreSection span.ship-to-home__header-text{text-indent:-9999px;line-height:0}.product-detail-form__actions .pickUpInStoreSection span.ship-to-home__header-text::after{content:"CURBSIDE PICK UP -";text-indent:0;display:block;line-height:initial}.product-detail-form__find-in-store{display:none!important}.TnL-newhours.closed li.working-hours__item:last-child span:nth-child(2){display:none}.TnL-newhours.closed li.working-hours__item:last-child span:nth-child(3){text-indent:-9999px;line-height:0;position:relative;right:6px}.TnL-newhours.closed li.working-hours__item:last-child span:nth-child(3):after{content:"Closed";text-indent:0;display:block;line-height:initial}.TnL-newhours.closed li.working-hours__item:last-child span:not(:nth-child(3)){visibility:hidden}.TnL-newhours.closed li.working-hours__item:last-child span:first-child{visibility:visible!important}.sc-product__status.pick-up-in-store-only{visibility:hidden;overflow:visible}.sc-product__status.pick-up-in-store-available:before,.sc-product__status.pick-up-in-store-only:before{visibility:visible;display:inline-block}.sc-product__status.pick-up-in-store-available:after,.sc-product__status.pick-up-in-store-only:after{visibility:visible;content:"Curbside pickup only";position:relative;bottom:21px;left:31px;display:block}
</style>
