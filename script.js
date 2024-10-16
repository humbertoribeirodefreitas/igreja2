document.getElementById('saveChanges').addEventListener('click', function () {
    const siteTitle = document.getElementById('siteTitle').value;
    const siteDescription = document.getElementById('siteDescription').value;
    const siteImage = document.getElementById('siteImage').files[0];

    // Salvar título e descrição no localStorage
    localStorage.setItem('siteTitle', siteTitle);
    localStorage.setItem('siteDescription', siteDescription);

    // Se houver uma nova imagem, salvar também
    if (siteImage) {
        const reader = new FileReader();
        reader.onloadend = function () {
            localStorage.setItem('siteImage', reader.result); // Salva a imagem como string base64
            document.getElementById('previewImage').src = reader.result; // Atualiza a visualização da imagem
        }
        reader.readAsDataURL(siteImage);
    }

    alert('Alterações salvas com sucesso!');
});
