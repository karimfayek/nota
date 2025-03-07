@extends('admin.app')
@section('title') {{ $pageTitle }} @endsection
@section('content')
    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> {{ $pageTitle }}</h1>
        </div>
    </div>
    @include('admin.partials.flash')
    <div class="row">
        <div class="col-md-8 mx-auto">
            <div class="tile">
                <h3 class="tile-title">{{ $subTitle }}</h3>
                <form action="{{ route('admin.categories.store') }}" method="POST" role="form" enctype="multipart/form-data">
                    @csrf
                    <div class="tile-body">
                        <div class="form-group">
                            <label class="control-label" for="name">اسم القسم <span class="m-l-5 text-danger"> *</span></label>
                            <input class="form-control @error('name') is-invalid @enderror" type="text" name="name" id="name" value="{{ old('name') }}"/>
                            @error('name') {{ $message }} @enderror
                        </div>
						
                        <div class="form-group">
                            <label class="control-label" for="description">وصف للقسم</label>
                            <textarea class="notiny form-control" rows="4" name="description" id="description">{{ old('description') }}</textarea>
                        </div>
						
                        <div class="form-group">
                            <label for="parent">القسم الأب <span class="m-l-5 text-danger"> *</span></label>
                            <select id=parent class="form-control custom-select mt-15 @error('parent_id') is-invalid @enderror" name="parent_id">
                                <option value="0">Select a parent category</option>
                                @foreach($categories as $key => $category)
                                    <option value="{{ $key }}"> {{ $category }} </option>
                                @endforeach
                            </select>
                            @error('parent_id') {{ $message }} @enderror
                        </div>
                        
                       
						
                        <div class="form-group">
                            <label class="control-label" for="order_no">ترتيب القسم</label>
                            <input type="number" class="form-control @error('order_no') is-invalid @enderror"  name="order_no" id="order_no">{{ old('order_no') }}</textarea>
							@error('order_no') {{ $message }} @enderror
                        </div>
                        <div class="form-group">
                            <label class="control-label">صورة مربعه</label>
                            <input class="form-control @error('image') is-invalid @enderror" type="file" id="image" name="image"/>
                            @error('image') {{ $message }} @enderror
                        </div>

                        <div class="form-group">
                            <label class="control-label">صورة عريضة(بعرض الشاشة)</label>
                            <input class="form-control @error('banner_image') is-invalid @enderror" type="file" id="banner_image" name="banner_image"/>
                            @error('banner_image') {{ $message }} @enderror
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" id="menu" name="menu" checked/>نشط (يظهر على الموقع)
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="tile-footer">
                        <button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>حفظ</button>
                        &nbsp;&nbsp;&nbsp;
                        <a class="btn btn-secondary" href="{{ route('admin.categories.index') }}"><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@push('scripts')

@endpush
