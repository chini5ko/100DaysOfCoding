  document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(50);
    this.MaterialProgress.setBuffer(5);
  });
