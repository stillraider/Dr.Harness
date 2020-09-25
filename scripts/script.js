let catalogBtn = $('.catalog__btn');
let catalogProduct = $('.catalog__product');

catalogBtn.on('click', function () {
	let buttonIndex = catalogBtn.index(this);
    catalogProduct.hide();
    catalogBtn.css('background','rgb(243, 243, 243)');
    catalogBtn.css('color','rgb(30, 30, 30)');
    catalogBtn.eq(buttonIndex).css('background','rgb(186, 1, 82)');
    catalogBtn.eq(buttonIndex).css('color','rgb(255, 255, 255)');
    catalogProduct.eq(buttonIndex).css('display','flex');
});

catalogProduct.on('click', function (e) {
	let target = $(e.target);

	if (target.hasClass('product__size') && !target.hasClass('activeSize')) {
		productSize(target);
	}
	else if (target.hasClass('product__color') && !target.hasClass('.colorActive"')) {
		productColor(target);
	}
	else if (target.hasClass('product__button')) {
		productInfo(target);
	}
});

let productSize = function (target) {
	$('.activeSize').removeClass('activeSize');
	target.addClass('activeSize');
}

let productColor = function (target) {
	$('.colorActive').removeClass('colorActive');
	target.addClass('colorActive');
}

let productInfo = function (target) {
	let popup = $('.popup');
	let	selectProduct = target.closest('.product');

	let TitleInfo = selectProduct.find(".product__title").text();
	let PriceInfo = selectProduct.find('.product__price-main').text();
	let ImgSrcInfo = selectProduct.find('.product__background').attr('src');
	let RowSizeInfo = CheckAndSelectSizeActive(selectProduct);
	let ColorInfo = CheckAndSelectColorActive(selectProduct);

	popup.find('.order-info-title').attr('value', TitleInfo);
	popup.find('.order-info-price').attr('value', PriceInfo );
	popup.find('.order-info-size').attr('value', RowSizeInfo);
	popup.find('.order-info-color').attr('value', ColorInfo);

	popup.find('.popup__info-title').text(TitleInfo);
	popup.find('.popup__info-price').text(PriceInfo );
	popup.find('.popup__info-size').text(RowSizeInfo);
	popup.find('.popup__info-color').attr('style', ColorInfo);
	popup.find('.popup__info-img').attr('src', ImgSrcInfo);
}

let CheckAndSelectSizeActive = function(selectProduct) {
	if (selectProduct.find('.activeSize').length == 0) {
		$('.activeSize').removeClass('activeSize');
		selectProduct.find('.product__size').eq(0).addClass('activeSize');
	}
	return selectProduct.find('.activeSize').text();
}

let CheckAndSelectColorActive = function(selectProduct) {
	if (selectProduct.find('.colorActive').length == 0) {
		$('.colorActive').removeClass('colorActive');
		selectProduct.find('.product__color').eq(0).addClass('colorActive');
	}
	return selectProduct.find('.colorActive').attr('style');
}

$(function(){
    $("#phone").mask("+7 (999) 999-9999");
});