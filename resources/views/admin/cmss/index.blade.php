@extends('admin.app')
@section('title') {{ $pageTitle }} @endsection
@section('content')
    <div class="app-title">
        <div>
            <h1><i class="fa fa-shopping-bag"></i> {{ $pageTitle }}</h1>
            <p>{{ $subTitle }}</p>
        </div>
        <a href="{{ route('admin.cmss.create') }}" class="btn btn-primary pull-right">Add Page</a>
    </div>
    @include('admin.partials.flash')
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <table class="table table-hover table-bordered table-responsive" id="sampleTable">
                        <thead>
                        <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th class="text-center"> Published ? </th>
                            <th class="text-center">  top menu ? </th>
                            <th class="text-center">  Footer ? </th>
                            <th class="text-center"> Why ? </th>
                            <th class="text-center"> client ? </th>
                            <th class="text-center"> Team ? </th>
                            <th class="text-center"> Service ? </th>
                            <th class="text-center"> Project ? </th>
                            <th class="text-center"> News ? </th>
                            <th class="text-center"> Blog ? </th>
                            <th class="text-center"> FAQ ? </th>
                           <th class="text-center"> Order No </th>
                            <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($cmss as $product)
                          
                                <tr>
                                   
                                    <td>  {{ $product->id }} </td>
                                    <td><a href="{{ route('admin.cmss.edit', $product->id) }}" class="btn btn-sm btn-primary" title="edit">{{ $product->name }} </a></td>
                                    <td>@if($product->published) <i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
									<td>@if($product->menu) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
									<td>@if($product->footer) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                     <td>@if($product->adv) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                    <td>@if($product->company) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                    <td>@if($product->team) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                    
                                    <td>@if($product->serv) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                    <td>@if($product->project) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                    <td>@if($product->news) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                    <td>@if($product->blog) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                    <td>@if($product->faq) <span style="opacity: 0">1</span><i class="fa fa-check true-icon" ></i> @else <i class="fa fa-times false-icon" ></i> @endif</td>
                                   <td>{{ $product->order_no }}</td>
                               
                                    <td class="text-center">
                                        <div class="btn-group" role="group" aria-label="Second group">
                                          
                                            <a href="{{ route('admin.cmss.delete', $product->id) }}" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
<style>
i.false-icon {
    color: #d22d2d;
    font-size: 20px;
}
i.true-icon {
    color: #007fcc;
    font-size: 20px;
}
</style>
    <script type="text/javascript" src="{{ asset('backend/js/plugins/jquery.dataTables.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('backend/js/plugins/dataTables.bootstrap.min.js') }}"></script>
    <script type="text/javascript">$('#sampleTable').DataTable();</script>

@endpush
