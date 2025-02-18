<div class="tile">
    <form action="{{ route('admin.settings.update') }}" method="POST" role="form">
        @csrf
        <h3 class="tile-title">Footer &amp; SEO</h3>
        <hr>
        <div class="tile-body">
           
            <div class="form-group">
                <label class="control-label" for="seo_meta_title">SEO Meta Title</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter seo meta title for store"
                    id="seo_meta_title"
                    name="seo_meta_title"
                    value="{{ config('settings.seo_meta_title') }}"
                />
            </div>
            <div class="form-group">
                <label class="control-label" for="seo_meta_description">SEO Meta Description</label>
                <textarea
                    class="notiny form-control"
                    rows="4"
                    placeholder="Enter seo meta description for store"
                    id="seo_meta_description"
                    name="seo_meta_description"
                >{{ config('settings.seo_meta_description') }}</textarea>
            </div>
			
            <div class="form-group">
                <label class="control-label" for="address">Address</label>
                <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Enter seo meta description for store"
                    id="address"
                    name="address"
                >{{ config('settings.address') }}</textarea>
            </div>
			<div class="form-group">
                <label class="control-label" for="address_ar">Address Arabic</label>
                <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Enter seo meta description for store"
                    id="address_ar"
                    name="address_ar"
                >{{ config('settings.address_ar') }}</textarea>
            </div>
			
			<div class="form-group">
                <label class="control-label" for="Phones">Phones</label>
                <input
					value="{{ config('settings.phones') }}"
					type="text"
                    class="form-control"
                    rows="4"
                    placeholder="Enter Phones"
                    id="phones"
                    name="phones"
                >
            </div>
            <div class="form-group">
                <label class="control-label" for="whatsapp">Whatsapp</label>
                <input
					value="{{ config('settings.whatsapp') }}"
					type="text"
                    class="form-control"
                    rows="4"
                    placeholder="Enter whatsapp prefix +2"
                    id="whatsapp"
                    name="whatsapp"
                >
            </div>
			
            <div class="form-group">
                <label class="control-label" for="map">Map</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Map Iframe"
                    id="map"
                    name="map"
                    value="{{ config('settings.map') }}"
                />
            </div>
        </div>
        <div class="tile-footer">
            <div class="row d-print-none mt-2">
                <div class="col-12 text-right">
                    <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                </div>
            </div>
        </div>
    </form>
</div>
