<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title') - {{ config('app.name') }}</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/css/main.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/css/font-awesome/css/font-awesome.min.css') }}"/>
    @yield('styles')
    <style>

.has-treeview ul {
    display: none
}
.has-treeview.menu-open ul{
    display: block
}
    </style>
</head>
<body class="app sidebar-mini rtl">
    @include('admin.partials.header')
    @include('admin.partials.sidebar')
    <main class="app-content" id="app">
        @yield('content')
        
    </main>
    <script src="{{ asset('backend/js/jquery-3.2.1.min.js') }}"></script>
    <script src="{{ asset('backend/js/popper.min.js') }}"></script>
    <script src="{{ asset('backend/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('backend/js/main.js') }}"></script>
    <script src="{{ asset('backend/js/plugins/pace.min.js') }}"></script>
    <script type="text/javascript" src="/backend/js/tinymce/tinymce.min.js"></script>
 
    <script>
      var editor_config = {
          plugins: "paste",
          paste_as_text: true,
toolbar: 'formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
    block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3',
	formats: {
        h2: { block: 'h2', wrapper: false } // Prevent wrapping the entire block
    },
          height: 400,
          path_absolute: "{{ URL::to('/') }}/",
          force_br_newlines: true,
          force_p_newlines: false,
          forced_root_block: false,
          selector: "textarea:not(.notiny)",
          plugins: [
              'advlist autolink lists link image charmap print preview hr anchor pagebreak',
              'searchreplace wordcount visualblocks visualchars code fullscreen',
              'insertdatetime media nonbreaking save table contextmenu directionality',
              'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
          ],
          toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
          toolbar2: 'fontsizeselect | print preview media | forecolor backcolor emoticons | codesample | insertGalleryImages | ltr rtl',
          relative_urls: false,
          file_picker_callback: function(callback, value, meta) {
              var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
              var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  
              var cmsURL = editor_config.path_absolute + 'laravel-filemanager?editor=' + meta.fieldname;
              if (meta.filetype == 'image') {
                  cmsURL = cmsURL + "&type=Images";
              } else {
                  cmsURL = cmsURL + "&type=Files";
              }
  
              tinyMCE.activeEditor.windowManager.openUrl({
                  url: cmsURL,
                  title: 'File Manager',
                  width: x * 0.8,
                  height: y * 0.8,
                  resizable: "yes",
                  close_previous: "no",
                  onMessage: (api, message) => {
                      // Ensure the correct URL is returned
                      callback(message.content);
                  }
              });
          },
          setup: function(editor) {
            editor.ui.registry.addButton('insertGalleryImages', {
                text: 'Insert Gallery Images',
                onAction: function() {
                    var content = '<div class="clearlist work-full-slider owl-carousel">' +
                                  'insert images here' +
                                  '</div><p></p>'; // Add a paragraph to ensure the row is separate
                    // Insert the content at the current cursor position or append if no selection
                    if (editor.selection) {
                        editor.selection.setContent(content);
                    } else {
                        editor.insertContent(content);
                    }
                }
            });
        }
      };
  
      tinymce.init(editor_config);
  </script>
<script>
  $(".btn-danger").click(function() {
   return confirm("Are you Sure ?!");
});
$(".has-treeview").click(function() {
    $(this).toggleClass('menu-open');
});
</script>
    @stack('scripts')
</body>
</html>
