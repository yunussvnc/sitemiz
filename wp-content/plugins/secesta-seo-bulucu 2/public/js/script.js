jQuery(document).ready(function($) {
    // Site input'undan http/https/www temizleme
    $('#site').on('input', function() {
        var value = $(this).val();
        value = value.replace(/^https?:\/\//i, '')
                     .replace(/^www\./i, '')
                     .replace(/\s+/g, '');
        $(this).val(value);
    });

    // İstatistikler bölümünü güncelle
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Konum bilgisini güncelle
    function updateLocationInfo(rank, totalResults, searchTime) {
        var locationInfo = $('#secesta-location-info');
        var rankDisplay = $('#secesta-rank-display');
        
        if (rank > 0) {
            let bgColor = rank === 1 ? '#1b5e20' : rank <= 10 ? '#2E7D32' : rank <= 30 ? '#28a745' : '#66BB6A';
            let message = '';
            
            if (rank === 1) {
                message = 'Mükemmel Başarı İlk Sıradasınız';
            } else if (rank <= 10) {
                message = 'Tebrikler İlk Sayfadasınız';
            } else if (rank <= 30) {
                message = 'Tebrikler, indeks almışsınız!';
            } else {
                message = 'İyi Sıralama';
            }
            
            // Konum bilgisi için basit mesaj
            locationInfo.html(`
                <p class="mb-0">Google'da ${rank}. sıradasınız</p>
            `);

            // Detaylı sonuç gösterimi
            rankDisplay.html(`
                <div class="alert alert-danger" role="alert" style="display: none;">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Siteniz ilk 100 sırada bulunamadı. SEO çalışmalarınızı gözden geçirmenizi öneririz.
                </div>
                <div class="d-flex gap-3 mb-3">
                    <!-- Sıralama -->
                    <div class="flex-1" style="flex: 1;">
                        <div class="rank-box h-100" style="background-color: ${bgColor}; border-radius: 8px; padding: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="flex-shrink: 0; width: 16px; height: 16px;">
                                    <svg viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                                    </svg>
                                </div>
                                <div style="flex-grow: 1; color: white;">
                                    <div style="font-size: 15px; font-weight: 500;">
                                        ${rank}. sıradasınız
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- İstatistikler -->
                    <div class="flex-1" style="flex: 1;">
                        <div class="rank-box h-100" style="background-color: ${bgColor}; border-radius: 8px; padding: 12px;">
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="color: white; font-size: 15px; font-weight: 500;">
                                    Toplam Sonuç
                                </div>
                                <div style="color: white; font-size: 20px; font-weight: bold;">
                                    ${formatNumber(totalResults)}
                                </div>
                                <div style="color: rgba(255,255,255,0.8); font-size: 13px;">
                                    ${searchTime} saniye içinde bulundu
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mesaj -->
                    <div class="flex-1" style="flex: 1;">
                        <div class="rank-box h-100" style="background-color: ${bgColor}; border-radius: 8px; padding: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="flex-shrink: 0; width: 16px; height: 16px;">
                                    <svg viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" fill="white"/>
                                    </svg>
                                </div>
                                <div style="flex-grow: 1; color: white;">
                                    <div style="font-size: 15px; font-weight: 500;">
                                        ${message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="progress mb-4" style="height: 4px; background-color: #f0f0f0; border-radius: 2px;">
                    <div class="progress-bar" role="progressbar" 
                         style="width: ${Math.min(100, (100 - rank))}%; background-color: ${bgColor}; transition: width 0.6s ease;" 
                         aria-valuenow="${rank}" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            `);
        } else {
            // İlk 100'de yoksa uyarı göster
            locationInfo.html(`
                <p class="mb-0">Arama yapılıyor...</p>
            `);
            rankDisplay.html(`
                <div class="alert alert-danger" role="alert">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Siteniz ilk 100 sırada bulunamadı. SEO çalışmalarınızı gözden geçirmenizi öneririz.
                </div>
            `);
        }
    }

    // Başlangıç mesajını güncelle
    function updateInitialMessage(rank) {
        const locationInfo = $('#secesta-location-info');
        if (rank === undefined) {
            // Başlangıç durumu
            locationInfo.html(`
                <div class="alert alert-info" role="alert">
                    <i class="fas fa-info-circle me-2"></i>
                    Google'da kaçıncı sırada olduğunuzu öğrenmek için lütfen sitenizin adresini ve anahtar kelimenizi girin
                </div>
            `);
        } else if (rank === 0 || rank === 'Bulunamadı') {
            // İlk 100'de yoksa
            locationInfo.html(`
                <div class="alert alert-danger" role="alert">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Siteniz ilk 100 sıralamada yok!
                </div>
            `);
        } else {
            // Sıralama bulundu
            locationInfo.html(`
                <div class="alert alert-success" role="alert">
                    <i class="fas fa-check-circle me-2"></i>
                    Google'da ${rank}. sıradasınız
                </div>
            `);
        }
    }

    // Tabloyu güncelle
    function updateResultsTable(results, site) {
        console.log('Tablo güncelleniyor:', results);
        
        const $container = $('#secesta-results-container');
        const $tbody = $('#secesta-results-tbody');
        
        // Tbody'yi temizle
        $tbody.empty();
        
        if (Array.isArray(results) && results.length > 0) {
            let html = '';
            results.forEach((result, index) => {
                if (result && result.link) {
                    const cleanUrl = result.link.replace(/^https?:\/\//i, '').replace(/^www\./i, '');
                    const domain = cleanUrl.split('/')[0];
                    const targetSite = site.toLowerCase().replace(/^https?:\/\//i, '').replace(/^www\./i, '');
                    const bgColor = cleanUrl.toLowerCase().includes(targetSite) ? 'background-color: rgba(40, 167, 69, 0.2);' : '';
                    
                    html += `
                        <tr style="${bgColor}">
                            <td class="px-3">${index + 1}.</td>
                            <td>${domain}</td>
                            <td class="px-3">
                                <a href="${result.link}" 
                                   target="_blank" 
                                   class="text-decoration-none text-truncate d-inline-block" 
                                   style="max-width: 300px; color: #007bff;"
                                   title="${result.title || ''}\n\n${result.snippet || ''}">
                                    ${cleanUrl}
                                </a>
                            </td>
                        </tr>
                    `;
                }
            });
            
            $tbody.html(html);
            $container.fadeIn();
        } else {
            $container.hide();
        }
    }

    // Sağ taraftaki bilgi alanını güncelle
    function updateRankInfo(rank, totalResults, searchTime) {
        const $rankInfo = $('#secesta-rank-info');
        
        if (rank > 0) {
            let bgColor = rank === 1 ? '#1b5e20' : rank <= 10 ? '#2E7D32' : rank <= 30 ? '#28a745' : '#66BB6A';
            let message = '';
            
            if (rank === 1) {
                message = 'Mükemmel Başarı İlk Sıradasınız';
            } else if (rank <= 10) {
                message = 'Tebrikler İlk Sayfadasınız';
            } else if (rank <= 30) {
                message = 'Tebrikler, indeks almışsınız!';
            } else {
                message = 'İyi Sıralama';
            }
            
            $rankInfo.html(`
                <div class="alert alert-success mb-3">
                    <i class="fas fa-check-circle me-2"></i>
                    Google'da ${rank}. sıradasınız
                </div>
                <div class="text-success mb-2">
                    <strong>${message}</strong>
                </div>
                <div class="small text-muted">
                    Toplam ${formatNumber(totalResults)} sonuç içinde<br>
                    ${searchTime} saniye içinde bulundu
                </div>
            `);
        } else {
            $rankInfo.html(`
                <div class="alert alert-danger mb-0">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Siteniz ilk 100 sırada bulunamadı. SEO çalışmalarınızı gözden geçirmenizi öneririz.
                </div>
            `);
        }
    }

    // Form submit olduğunda
    $('#secesta-rank-form').on('submit', function(e) {
        e.preventDefault();
        
        var form = $(this);
        var submitButton = form.find('button[type="submit"]');
        var originalButtonText = submitButton.html();

        // reCAPTCHA kontrolü
        var captchaResponse = grecaptcha.getResponse();
        if (!captchaResponse) {
            alert('Lütfen güvenlik doğrulamasını tamamlayın.');
            return;
        }
        
        // Form verilerini al
        var site = form.find('input[name="site"]').val()
                      .replace(/^https?:\/\//i, '')
                      .replace(/^www\./i, '')
                      .replace(/\s+/g, '');
        var keyword = form.find('input[name="keyword"]').val();

        console.log('Arama yapılıyor:', { site, keyword });

        // Butonu devre dışı bırak ve yükleniyor animasyonu göster
        submitButton.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Aranıyor...');

        // AJAX isteği
        $.ajax({
            url: secesta_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'secesta_find_rank',
                site: site,
                keyword: keyword,
                captcha: captchaResponse,
                nonce: secesta_ajax.nonce
            },
            success: function(response) {
                console.log('API Yanıtı:', response);
                try {
                    if (response.success && response.data) {
                        const rank = response.data.rank || 0;
                        const totalResults = parseInt(response.data.total_results) || 0;
                        const searchTime = parseFloat(response.data.search_time) || 0;
                        const searchResults = response.data.results || [];
                        
                        console.log('Yanıt Verileri:', response.data);
                        console.log('Arama Sonuçları:', searchResults);
                        console.log('Sonuç Sayısı:', searchResults.length);
                        
                        // Sağ taraftaki bilgi alanını güncelle
                        updateRankInfo(rank, totalResults, searchTime);
                        
                        // Tabloyu güncelle
                        updateResultsTable(searchResults, site);
                    } else {
                        updateRankInfo(0);
                        $('#secesta-results-container').hide();
                    }
                } catch (e) {
                    console.error('Yanıt İşleme Hatası:', e);
                    updateRankInfo(0);
                    $('#secesta-results-container').hide();
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX Hatası:', error);
                updateInitialMessage(0);
                $('#secesta-results-container').hide();
            },
            complete: function() {
                submitButton.prop('disabled', false).html(originalButtonText);
                $('.secesta-loading').hide();
                grecaptcha.reset();
            }
        });
    });

    // Sayfa yüklendiğinde başlangıç mesajını göster
    updateInitialMessage();
});

// Stil ekle
jQuery('head').append(`
<style>
.result-container {
    margin: 10px 0;
}
.result-box {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.result-content {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    height: 56px;
}
.result-icon {
    width: 24px;
    height: 24px;
    margin-right: 15px;
    flex-shrink: 0;
}
.result-info {
    flex-grow: 1;
}
.result-rank {
    color: white;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
}
.result-stats {
    color: rgba(255,255,255,0.8);
    font-size: 13px;
    margin-top: 2px;
}

/* Checkmark Animation */
.checkmark {
    width: 24px;
    height: 24px;
    display: block;
}
.checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards;
}

/* Error Mark Animation */
.error-mark {
    width: 24px;
    height: 24px;
    display: block;
}
.error-mark__circle {
    stroke-dasharray: 72;
    stroke-dashoffset: 72;
    animation: stroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}
.error-mark__symbol {
    stroke-dasharray: 18;
    stroke-dashoffset: 18;
    animation: stroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards;
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
}

.rank-box {
    transition: all 0.3s ease;
}
.rank-box:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}
@media (max-width: 768px) {
    .rank-box {
        padding: 10px !important;
    }
    .rank-box > div {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 6px !important;
    }
}
</style>
`); 