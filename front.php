<?php
/**
 *
 */

add_shortcode('modal-lite', 'modal_add_front');
function modal_add_front() {

		wp_enqueue_style( 'modal-lite', plugin_dir_url(dirname( __FILE__) ) . 'modal/assets/css/modal-lite.css' );
		wp_enqueue_script( 'modal-lite', plugin_dir_url(dirname( __FILE__) ) . 'modal/assets/js/modal-lite.js');
		?>
		<button onclick="openModal(document.getElementById('modal'), 'content modal', 'title modal')">Open modal</button>
		<div class="modal" id="modal">
			<div class="modal-header">
				<h2 id="modal-title"></h2>
			</div>
			<div class="modal-content">

			</div>
			<div class="modal-footer">
				<p>
					<button class="button" onclick="closeModal()">
						&times; Fermer
					</button>
				</p>
			</div>
		</div>
		<div class="overlay" onclick="closeModal()" id="modalOverlay"></div>
		<?php
}
