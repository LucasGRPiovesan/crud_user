export class Service
{
    static _request(
        method, 
        endpoint,
        data = {},
        resource
    ) {

        $.ajax({
            url: `/api/${endpoint}`,
            type: method,
            data: data,
            beforeSend: function() {
                if (resource.onBeforeSend) {
                    resource.onBeforeSend();
                }
            },
            success: function(response) {
                if (resource.onSuccess) {
                    resource.onSuccess(response);
                }
            },
            error: function(error) {
                if (resource.onError) {
                    resource.onError(error);
                }
            },
            complete: function() {
                if (resource.onComplete) {
                    resource.onComplete();
                }
            }
        });
    }
}