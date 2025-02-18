@extends('admin.app')
@section('title') {{ $pageTitle }} @endsection
@section('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/js/plugins/dropzone/dist/min/dropzone.min.css') }}"/>
@endsection
@section('content')
    <div class="app-title">
        <div>
            <h1><i class="fa fa-shopping-bag"></i> {{ $pageTitle }} - {{ $subTitle }}</h1>
        </div>
    </div>
    @include('admin.partials.flash')
    <div class="row user">
        <div class="col-md-12">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                        <form action="{{ route('admin.blogs.store') }}" method="POST" role="form" enctype="multipart/form-data">
                            @csrf
                            <h3 class="tile-title">Blog Information</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="title">Title *</label>
                                    <input
                                        class="form-control @error('title') is-invalid @enderror"
                                        type="text"
                                        placeholder="Enter  title"
                                        id="title"
                                        name="title"
                                        value="{{ old('title') }}"
                                    />
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('title') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								 <div class="form-group">
                                    <label class="control-label" for="content">Content </label>
                                    <textarea
                                        class="form-control @error('content') is-invalid @enderror"
                                       
                                        id="content"
                                        name="content"
                                    />{{ old('content') }} </textarea>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('content') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								 <div class="form-group">
                                    <label class="control-label" for="seo_kw">Key Wors</label>
                                    <textarea
                                        class="notiny  form-control @error('seo_kw') is-invalid @enderror"
                                       
                                        id="seo_kw"
                                        name="seo_kw"
                                    />{{ old('seo_kw') }} </textarea>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('seo_kw') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								
                               
								
								 <div class="tab-pane" id="images">
									<div class="tile">
										<h3 class="tile-title">Upload Image *</h3>
										<hr>
										<div class="tile-body">
											<div class="row">
												<div class="col-md-12">
												   <input class="form-control " type="file" id="image" name="image" required>
												</div>
											</div>
										</div>
									</div>
								</div>
                                
                            </div>
                            <div class="tile-footer">
                                
                            <div class="row d-print-none mt-2">
                                <div class="col-12 text-right">
                                    <button type="submit" class="btn btn-success" type="button" id="uploadButton">
                                        <i class="fa fa-fw fa-lg fa-upload"></i>Create
                                    </button>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script type="text/javascript" src="{{ asset('backend/js/plugins/bootstrap-notify.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('backend/js/app.js') }}"></script>
    
@endpush

