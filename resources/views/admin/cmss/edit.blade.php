@extends('admin.app')
@section('title') {{ $pageTitle }} @endsection
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
                        <form action="{{ route('admin.cmss.update') }}" method="POST" role="form" enctype="multipart/form-data">
                            @csrf
                            <h3 class="tile-title">Page Information</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="name">Name</label>
                                    <input
                                        class="form-control @error('name') is-invalid @enderror"
                                        type="text"
                                        placeholder="Enter name"
                                        id="name"
                                        name="name"
                                        value="{{ old('name', $product->name) }}"
                                    />
                                    <input type="hidden" name="product_id" value="{{ $product->id }}">
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('name') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								<div class="form-group">
                                    <label class="control-label" for="name2">Name ar</label>
                                    <input
                                        class="form-control @error('name2') is-invalid @enderror"
                                        type="text"
                                        placeholder="Enter name ar"
                                        id="namer"
                                        name="name2"
                                        value="{{ old('name2', $product->name2) }}"
                                    />
                                    <input type="hidden" name="product_id" value="{{ $product->id }}">
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i> @error('name') <span>{{ $message }}</span> @enderror
                                    </div>
                                </div>
								
                                <div class="form-group">
                                    <label class="control-label" for="content">content EN</label>
									<textarea name="content">{{ $product->content }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="content2">content AR</label>
									<textarea name="content2">{{ $product->content2 }}</textarea>
                                </div>
								
                            </div>
                            <div class="card card-secondary card-outline collapsed-card" data-card-name="topic-adv" data-hideattribute="TopicDetailsPage.HideDisplayBlock" id="topic-file"><div class="card-header with-border clearfix"><div class="card-title"><i class="fa fa-lg mr-2 fa-file"></i>Files and images</div><div class="card-tools float-right"></div></div>
                            <div class="card-body" >   
                                <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-2">
                                                @if ($product->image != null)
                                                    <figure class="mt-2" style="width: 80px; height: auto;">
                                                        <img src="{{ asset('storage/cmsimages/mobile_photos/'.$product->image) }}" id="categoryImage" class="img-fluid" alt="img">
                                                    </figure>
                                                @endif
                                            </div>
                                            <div class="col-md-10">
                                                <label class="control-label"> Image</label>
                                                <input class="form-control @error('image') is-invalid @enderror" type="file" id="image" name="image"/>
                                                @error('image') {{ $message }} @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    @if ($product->file != null)
                                                        <figure class="mt-2" style="width: 80px; height: auto;">
                                                            <i class="fa fa-3x fa-file-o"></i>
                                                        </figure>
                                                    @endif
                                                </div>
                                                
                                            </div>
                                        </div>


                        </div>
                    </div>
							<nop-card>
<div class="card card-secondary card-outline collapsed-card" data-card-name="topic-display" data-hideattribute="TopicDetailsPage.HideDisplayBlock" id="topic-display"><div class="card-header with-border clearfix"><div class="card-title"><i class="fa fa-lg mr-2 fa-tv"></i>Display</div><div class="card-tools float-right"></div></div>
	<div class="card-body" >
		<div class="form-group row">
			<div class="col-md-3">
				<div class="label-wrapper">
				<label class="col-form-label" for="Published">Published</label>
				</div>
			</div>
			<div class="col-md-9">
				<input @if($product->published) checked="checked"  @endif class="check-box" id="published" name="published" type="checkbox" >
			</div>
		</div>
		<div class="form-group row">
			<div class="col-md-3">
				<div class="label-wrapper">
				<label class="col-form-label" for="menu">Include in top menu</label>
				</div>
			</div>
			<div class="col-md-9">
				<input @if($product->menu) checked="checked"  @endif  class="check-box" id="menu" name="menu" type="checkbox" >
			</div>
		</div>
<div class="form-group row">
			<div class="col-md-3">
				<div class="label-wrapper">
				<label class="col-form-label" for="footer">Include in Footer </label>
				</div>
			</div>
			<div class="col-md-9">
				<input class="check-box" id="footer" name="footer" type="checkbox"  @if($product->footer) checked="checked"  @endif  >
			</div>
		</div>
        @if ($product->mission == 1 )
        <p> </p>
        @elseif ($product->vision == 1)
        <p></p>
        @elseif ($product->slug == 'about')
        <p></p>
           @else 
      
      
      
		
       
		<div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="blog">Include in Blogs </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->blog) checked="checked"  @endif  class="check-box" id="blog" name="blog" type="checkbox" >
                </div>
            </div>
			
            <div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="faq">Include in FAQ </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->faq) checked="checked"  @endif  class="check-box" id="faq" name="faq" type="checkbox" >
                </div>
            </div>
			<div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="adv">Include in Why choose us </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->adv) checked="checked"  @endif  class="check-box" id="adv" name="adv" type="checkbox" >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="company">Include in Clients </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->company) checked="checked"  @endif  class="check-box" id="company" name="company" type="checkbox" >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="team">Include in Team </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->team) checked="checked"  @endif  class="check-box" id="team" name="team" type="checkbox" >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="serv">Include in Services </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->serv) checked="checked"  @endif  class="check-box" id="serv" name="serv" type="checkbox" >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="project">Include in Projects </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->project) checked="checked"  @endif  class="check-box" id="project" name="project" type="checkbox" >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-3">
                    <div class="label-wrapper">
                    <label class="col-form-label" for="news">Include in News </label>
                    </div>
                </div>
                <div class="col-md-9">
                    <input @if($product->news) checked="checked"  @endif  class="check-box" id="news" name="news" type="checkbox" >
                </div>
            </div>
            @endif
		
		<div class="form-group row">
			<div class="col-md-3">
				<div class="label-wrapper">
				<label class="col-form-label" for="order_no">Display order</label>
				</div>
			</div>
			<div class="col-md-9">
				<input  class="check-box" id="order_no" name="order_no" type="number" value="{{$product->order_no}}">
			</div>
		</div>
	</div>
</div>
</nop-card>

                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update </button>
                                        <a class="btn btn-danger" href="{{ route('admin.cmss.index') }}"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</a>
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

@endpush
